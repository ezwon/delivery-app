import React from "react";
import {Button, Tag, Space, Table} from 'antd';
import moment from 'moment';

import {BookingState, typeBooking} from "../reducer";
import {useSelector} from "react-redux";

interface ListBookingsProps {
    deleteBooking(booking: typeBooking): void;
}

export const ListBookings: React.FC<ListBookingsProps> = ({deleteBooking}) => {
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
                if(courier && courier.length > 0){
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
            render: (origin: any) => <span>{origin.name}<br />{origin.contact}<br />{origin.address}</span>,
        },
        {
            title: 'Destination',
            width: '25%',
            dataIndex: 'destination',
            key: 'destination',
            render: (destination: any) => <span>{destination.name}<br />{destination.contact}<br />{destination.address}</span>,
        },
        {
            title: 'Date',
            width: '20%',
            dataIndex: 'date',
            key: 'date',
            render: (date: string) => <span>{moment(date).format('MMM DD, YYYY')}<br />{moment(date).format('hh:mm:ss A')}</span>,
        },
        {
            title: 'Action',
            width: '5%',
            key: 'action',
            render: (text: string, record: any) => (
                <Space size="middle">
                    <Button onClick={()=>deleteBooking(record)}>Delete</Button>
                </Space>
            ),
        },
    ];

    return (
        <Table rowKey={(record)=>record.id} columns={columns} dataSource={bookings}/>
    );
};
