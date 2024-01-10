import React from 'react';
// import {useNavigate} from 'react-router-dom';
import './Login.css';
import Card from './Card';
import FirstBarChart from './FirstBarChart';
import SecondBarChart from './SecondBarChart';

const Dashboard = () => {
    return (
        <div className="container-one">
            <div className="top">
                <div className="text1 font">Company Metrics</div>
                <div className="grid">
                    <Card
                        text1='$406,411.29'
                        text2='Total Revenue'
                        div="text1 green" />

                    <Card
                        text1='$620'
                        text2='Total Jobs Avg'
                        div="text1" />

                    <Card
                        text1='655'
                        text2='Tickets Created'
                        div="text1" />

                    <Card
                        text1='735'
                        text2='Tickets Scheduled'
                        div="text1" />

                    <Card
                        text1='$110,448.8'
                        text2='Outstanding Amount'
                        div="text1 red" />

                    <Card
                        text1='105'
                        text2='Memberships Sold'
                        div="text1" />

                    <Card
                        text1='436'
                        text2='Jobs Completed'
                        div="text1" />

                    <Card
                        text1='65'
                        text2='Total Cancelled'
                        div="text1" />


                </div>

            </div>
            <div className='barChart'>
                <div className='down'>
                    <div className='text2 font'>Revenue By Job Location</div>
                    <FirstBarChart />
                </div>
                <div className='down'>
                    <div className='text2 font'>Revenue By Job Type</div>
                    <SecondBarChart />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
