import React, { useEffect, useRef, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

export default function ViewReportsPage() {
    const [selectedTab, setSelectedTab] = useState(0)
    const tabOne = useRef(null)
    const tabTwo = useRef(null)
    useEffect(() => {
        
    }, []);


    return (
        <div className='pt-20'>
            ViewReports
            <Tabs>
                <TabList className={''}>
                    <Tab className={''} onClick={() => setSelectedTab(0)} ref={tabOne}>Title 1</Tab>
                    <Tab className={''} onClick={() => setSelectedTab(1)} ref={tabTwo}>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}
