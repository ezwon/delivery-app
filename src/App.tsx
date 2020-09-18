import React from "react";
import {Row, Col, Tabs } from 'antd';
import {useDispatch} from "react-redux";

import {typeBooking} from "./bookings/reducer";
import {addBooking, deleteBooking, assignBooking} from "./bookings/actions";

import {CreateBooking} from "./bookings/components/CreateBooking";
import {ListBookings} from "./bookings/components/ListBookings";
import {AssignBooking} from "./bookings/components/AssignBooking";

import './App.css';

const { TabPane } = Tabs;
function App() {
    const dispatch = useDispatch();

    const onCreateBooking = (booking: typeBooking) => {
        dispatch(addBooking(booking));
    };

    const onDeleteBooking = (booking: typeBooking) => {
        dispatch(deleteBooking(booking));
    }

    const onAssignBooking = (booking: typeBooking) => {
        dispatch(assignBooking(booking));
    }

    return (
        <div style={{padding: '20px'}}>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Create Booking" key="1">
                    <Row gutter={10}>
                        <Col span={8}>
                            <CreateBooking addBooking={onCreateBooking}/>
                        </Col>
                        <Col span={16} style={{padding: '20px'}}>
                            <ListBookings deleteBooking={onDeleteBooking} />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="Assign Booking" key="2">
                    <Row>
                        <Col span={24}>
                            <AssignBooking assignBooking={onAssignBooking} />
                        </Col>
                    </Row>
                </TabPane>
            </Tabs>
        </div>
    );
}

export default App;
