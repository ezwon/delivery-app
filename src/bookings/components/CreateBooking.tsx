import React, {ChangeEvent} from "react";
import {Button, Input, Row, Col, Typography, message} from 'antd';
import moment from 'moment';

import {typeBooking} from "../reducer";

const { TextArea } = Input;
const { Title } = Typography;
const  randomString = require("randomstring");

interface CreateBookingProps {
    addBooking(booking: typeBooking): void;
}

export const CreateBooking: React.FC<CreateBookingProps> = ({addBooking}) => {
    const [name, setName] = React.useState("");
    const [contact, setContact] = React.useState("");
    const [address, setAddress] = React.useState("");

    const [recipientName, setRecipientName] = React.useState("");
    const [recipientContact, setRecipientContact] = React.useState("");
    const [recipientAddress, setRecipientAddress] = React.useState("");

    const handleCreateBooking = () => {

        if(name === '' || contact === '' || address === '' || recipientName === ''
        || recipientContact === '' || recipientAddress === ''){
            message.info("Please complete the form");
            return;
        }

        addBooking({
            id: randomString.generate(7),
            origin: {
                name,
                contact,
                address
            },
            destination: {
                name : recipientName,
                contact: recipientContact,
                address: recipientAddress
            },
            date: moment().toDate(),
            courier: ''
        });

        setName("");
        setContact("");
        setAddress("");

        setRecipientName("");
        setRecipientContact("");
        setRecipientAddress("");
    };

    return (
        <div className="bookings">

            <Title level={4}>Pick Up Details</Title>
            <Row gutter={10}>
                <Col span={12}>
                    <Input
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        value={name}
                        type="text"
                        name="Name"
                        placeholder="Name"
                    />
                </Col>
                <Col span={12}>
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
                <Col span={24}>
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
                <Col span={12}>
                    <Input
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setRecipientName(e.target.value)}
                        value={recipientName}
                        type="text"
                        name="Name"
                        placeholder="Name"
                    />
                </Col>
                <Col span={12}>
                    <Input
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setRecipientContact(e.target.value)}
                        value={recipientContact}
                        type="text"
                        name="Contact"
                        placeholder="Contact"
                    />
                </Col>
            </Row>
            <Row gutter={10}>
                <Col span={24}>
                    <TextArea
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setRecipientAddress(e.target.value)}
                        value={recipientAddress}
                        name="Address"
                        placeholder="Address"
                    />
                </Col>
            </Row>
            <Button type="primary" onClick={handleCreateBooking}>Create Booking</Button>
        </div>
    );
};
