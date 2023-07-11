import {Input, Button} from "antd";
import {Row, Col} from "antd";
import { useState } from "react";

function Bookroom() {
	const [data, setData] = useState({});

	const  handleSubmit = (e) => {
		console.log(data);
	}

	const handleChangeInput = (e) => {
		const object = {
			...data, 
			[e.target.name]: e.target.value
		};

		setData(object);
	}



	return (
		<>
			<h2>Đặt phòng</h2>

				<Row gutter={[20, 20]}>
					<Col xxl = {24} xl ={24} lg={2} md={6} sm={10} xs={12}>
						<p>Họ tên</p>
						<Input name="fullName" placeholder="Nhập họ tên..." onChange={handleChangeInput}/>
					</Col>
					<Col xxl = {12} xl ={12} lg={2} md={6} sm={10} xs={12}>
						<p>Số điện thoại</p>
						<Input name="numberPhone" placeholder="Nhập số điện thoại..." onChange={handleChangeInput}/>
					</Col>
					<Col xxl = {12} xl ={12} lg={2} md={6} sm={10} xs={12}>
						<p>Email</p>
						<Input name="Email" placeholder="Nhập email..." onChange={handleChangeInput}/>
					</Col>

					<Col span={24}>
						<Button type="primary" onClick={handleSubmit}>Đặt phòng</Button>
					</Col>
				</Row>
				
				
		</>
	)
}

export default Bookroom;