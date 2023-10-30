import React from 'react';
import { Service } from './ourservice/Service';
import NBanner from './NBanner/NBanner';
import AdvSafety from '../Adv/AdvSafety';
import CService from '../CService/CService';

export const Home = ({ hideHeaderPaths = [] }) => {
    return (
        <>
            <div className="home-container">
                <NBanner />
                <Service />
                <AdvSafety />
                <CService />
            </div>
        </>
    );
};
