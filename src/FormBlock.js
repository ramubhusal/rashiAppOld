import React from 'react';
import { List, ListItem, ListInput, Input, Block } from 'framework7-react';
import returnDetail from './RasiFind.js';

class FormBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailJSON: []
        };

        this.findDetails = (obj) => {
            console.log('Keyp', obj);
            if (obj.key === "Enter") {
                let birthName = obj.target.value;

                this.setState(prevState => ({
                    detailJSON: returnDetail(birthName)
                }));
            }
        }

        this.capitalize = (firstName) => {
            let finalName = '';
            firstName.split("").forEach(function(val, idx) {
                if (idx === 0) {
                    finalName += val.toUpperCase();
                } else {
                    finalName += val;
                }
            });
        
            return finalName;
        }
    }

    render() {
        let detailValues = this.state.detailJSON;
        return (
            <Block>
                <List noHairlinesMd>
                {/* <div class="list no-hairlines-md"> */}
                    <ul>
                        <li class="item-content item-input">
                            <div class="item-inner">
                                <div class="item-title item-label">{this.props.label}</div>
                                <div class="item-input-wrap">
                                    <input 
                                        type="text" 
                                        placeholder="Birth name"
                                        onKeyUp={this.findDetails.bind(this)}
                                    />
                                    <span class="input-clear-button"></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                {/* </div> */}
                </List>

                <List mediaList>
                    <ListItem link="#" header="Name" title={detailValues.name && this.capitalize(detailValues.name)} />
                    <ListItem link="#" header="Rashi" title={detailValues.rashi} >
                        {/* <img src={detailValues.image} slot="media" width="40" /> */}
                    </ListItem>
                    <ListItem link="#" header="Nachhetra" title={detailValues.nachhetra} />
                    <ListItem link="#" header="Nadi" title={detailValues.nadi} />
                    <ListItem link="#" header="Gad" title={detailValues.gad} />
                    <ListItem link="#" header="Swami" title={detailValues.swami} />
                    <ListItem link="#" header="Yoni" title={detailValues.yoni} />
                    <ListItem link="#" header="Aashan" title={detailValues.aashan} />
                </List>
            </Block>
        );
    }
}

export default FormBlock;