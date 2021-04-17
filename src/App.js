import React from 'react';
import FormBlock from './FormBlock.js';
import { App, Page, Navbar, Toolbar, Link, Tabs, Tab, Block, Row, Col } from 'framework7-react';

function Main() {
    return (
        <App>
            <Page pageContent={false}>
                <Navbar title="Rashi App"></Navbar>
                <Toolbar tabbar top>
                    <Link tabLink="#tab-1" tabLinkActive>Single</Link>
                    <Link tabLink="#tab-2">Partner</Link>
                </Toolbar>

                <Tabs>
                    <Tab id="tab-1" className="page-content" tabActive>
                        <FormBlock label="Your Name (Press Enter)" />
                    </Tab>
                    <Tab id="tab-2" className="page-content">
                        <Block>
                            <Row>
                                <Col>
                                    <FormBlock label="Your Name (Press Enter)" />
                                </Col>
                                <Col>
                                    <FormBlock label="Partner Name (Press Enter)" />
                                </Col>
                            </Row>
                        </Block>
                    </Tab>
                </Tabs>
            </Page>
        </App>
    );
}

export default Main;