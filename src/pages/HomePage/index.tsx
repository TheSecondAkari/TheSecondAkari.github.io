import React, { FC } from 'react';
import { Avatar, Button, message } from 'antd';
import myAvatar from '../../assets/hime.jpg';
import './index.css';

interface HomePageProps {

}

const HomePage: FC<HomePageProps> = (props) => {
    return (
        <>
            <div style={{ padding: 56, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Avatar size={300} src={<img alt="avatar" src={myAvatar} />} />
                <h1 style={{ margin: 0, textAlign: 'center', fontSize: '32px' }}>
                    TheSecondAkari
                </h1>
                <p style={{ marginBottom: 8, color: '#6a8bad', textAlign: 'center', fontSize: '24px' }}>
                    No Game No Life
                </p>
                <Button size="large" type="primary" onClick={() => message.warn('迟点开发')} >
                    前往更多
                </Button>
            </div >
            <div style={{ width: '100%' }}>
                <div style={{ width: 600, margin: 'auto', display: 'flex', justifyContent: 'space-between' }} >
                    <div>
                        <div className="homepage-subtitle">About me</div>
                        <div className="homepage-subdescription">一个魂</div>
                        <div className="homepage-subdescription">喜欢游戏</div>
                        <div className="homepage-subdescription">前端萌新工程师</div>
                    </div>
                    <div>
                        <div className="homepage-subtitle">weChet</div>
                        <div className="homepage-subdescription">a464686812</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;