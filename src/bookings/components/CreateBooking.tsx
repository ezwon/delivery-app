import React, {ChangeEvent} from "react";
import {typeBooking} from "../reducer";
import {Button, Input, Row, Col, Typography} from 'antd';
const { TextArea } = Input;
const { Title } = Typography;

interface CreateBookingProps {
    addBooking(booking: typeBooking): void;
}

export const CreateBooking: React.FC<CreateBookingProps> = ({addBooking}) => {
    const [name, setName] = React.useState("");
    const [contact, setContact] = React.useState("");
    const [address, setAddress] = React.useState("");


    const handleCreateBooking = () => {
        addBooking({
            name,
            contact,
            address
        });
        setName("");
        setContact("");
        setAddress("");
    };

    return (
        <div className="bookings">
            <Title level={4}>Pick Up Details</Title>
            <Row gutter={10}>

                <Col span={4}>
                    <Input
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        value={name}
                        type="text"
                        name="Name"
                        placeholder="Name"
                    />
                </Col>
                <Col span={4}>
                    <Input
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setContact(e.target.value)}
                        value={contact}
                        type="text"
                        name="Contact"
                        placeholder="Contact"
                    />
                </Col>
            </Row>
            <Row gutter={10} >
                <Col span={8}>
                    <TextArea
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setAddress(e.target.value)}
                        value={address}
                        name="Address"
                        placeholder="Address"
                    />
                </Col>
            </Row>
            <Title level={4}>Destinations Details</Title>
            <Row gutter={10} >

                <Col span={4}>
                    <Input
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        value={name}
                        type="text"
                        name="Name"
                        placeholder="Name"
                    />
                </Col>
                <Col span={4}>
                    <Input
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setContact(e.target.value)}
                        value={contact}
                        type="text"
                        name="Contact"
                        placeholder="Contact"
                    />
                </Col>
            </Row>
            <Row gutter={10} >
                <Col span={8}>
                    <TextArea
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setAddress(e.target.value)}
                        value={address}
                        name="Address"
                        placeholder="Address"
                    />
                </Col>
            </Row>
            <Button type="primary" onClick={handleCreateBooking}>Create Booking</Button>
        </div>
    );
};
