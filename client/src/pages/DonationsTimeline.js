import React from "react";
import { Timeline, Layout, Typography } from "antd";
import { gql, useQuery } from "@apollo/client";

const { Content } = Layout;
const { Title } = Typography;

const GET_donations = gql`
	query donations {
		donations {
			id
			donation
			tokenAddress
			timeStamp
		}
	}
`;

function DonationsTimeline() {
	const { loading, error, data } = useQuery(GET_donations);
	if (loading) {
		return <div>Loading</div>;
	}
	if (error) {
		console.log(error.message);
	}

	function timeConverter(UNIX_timestamp) {
		var a = new Date(UNIX_timestamp * 1000);
		var months = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var hour = a.getHours();
		var min = a.getMinutes();
		var sec = a.getSeconds();
		var time =
			date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
		return time;
	}

	return (
		<Content
			style={{ padding: "20px 20px", background: "#fff", minHeight: "83vh" }}
		>
			<Title>Donations Timeline</Title>
			<Timeline>
				<Timeline.Item>
					Created the donation receiving contract on 10/10/2021
				</Timeline.Item>
				{data.donations.map((record) => (
					<Timeline.Item>
						Received a donation of {record.donation} on{" "}
						{timeConverter(record.timeStamp)}
					</Timeline.Item>
				))}
				{/* <Timeline.Item>
					Added recepient <a>0xB820c4623E006d07aDF25a72cd28BEE517266Da5</a> with
					a share of '40%' on 11/10/2021
				</Timeline.Item>
				<Timeline.Item>
					Received a donation of 10 USDCx from
					<a>0x904259ADc7cf7e7e4F8Dd529aa85E6bcEd7917C8</a> on 12/10/2021
				</Timeline.Item> */}
			</Timeline>
		</Content>
	);
}

export default DonationsTimeline;
