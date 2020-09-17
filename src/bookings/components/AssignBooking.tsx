import React, {ChangeEvent} from "react";
import {Input, Row, Col, Tag, Space, Button, Table, message} from 'antd';

import moment from "moment";
import {useSelector} from "react-redux";
import {BookingState} from "../reducer";


interface AssignBookingProps {
    assignBooking(booking: any): void;
}

export const AssignBooking: React.FC<AssignBookingProps> = ({assignBooking}) => {
    const [courier, setCourier] = React.useState("");

    const handleAssignBooking = (bookingId: string) => {
        if(courier.trim() === '' ){
            message.info("Please enter courier name!");
            return;
        }
        assignBooking({
            bookingId,
            courier
        });
    };

    const bookings = useSelector<BookingState, BookingState["bookings"]>(
        (state) => state.bookings
    );

    const columns = [
        {
            title: 'ID',
            width: '10%',
            dataIndex: 'id',
            key: 'id',
            render: (text: string) => <span>{text.toUpperCase()}</span>,
        },
        {
            title: 'Courier',
            width: '15%',
            key: 'courier',
            dataIndex: 'courier',
            render: (courier: string) => {
                if (courier && courier.length > 0) {
                    return <Tag color='blue'>
                        {courier.toUpperCase()}
                    </Tag>
                } else {
                    return null;
                }
            }
        },
        {
            title: 'Origin',
            width: '25%',
            dataIndex: 'origin',
            key: 'origin',
            render: (origin: any, record: any) => <span>
                  {(courier !== '' && courier === record.courier) ? <span>
                    {origin.name}<br/>{origin.contact}<br/>{origin.address}
                </span> : <span>
                    Assign to view details
                </span>}

            </span>,
        },
        {
            title: 'Destination',
            width: '25%',
            dataIndex: 'destination',
            key: 'destination',
            render: (destination: any, record: any) => <span>
                {(courier !== '' && courier === record.courier) ? <span>
                    {destination.name}<br/>{destination.contact}<br/>{destination.address}
                </span> : <span>
                    Assign to view details
                </span>}

            </span>,
        },
        {
            title: 'Date',
            width: '20%',
            dataIndex: 'date',
            key: 'date',
            render: (date: string) =>
                <span>{moment(date).format('MMM DD, YYYY')}<br/>{moment(date).format('hh:mm:ss A')}</span>,
        },
        {
            title: 'Action',
            width: '5%',
            key: 'action',
            render: (text: string, record: any) => (
                <Space size="middle">
                    <Button onClick={() => handleAssignBooking(record.id)}>Assign</Button>
                </Space>
            ),
        },
    ];

    return (
        <Row className="">
            <Col span={24}>
                <Input
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setCourier(e.target.value)}
                    value={courier}
                    type="text"
                    name="Courier Name"
                    placeholder="Courier Name"
                />
                <Table rowKey={(record) => record.id} columns={columns} dataSource={bookings}/>
            </Col>
        </Row>
    );
};
