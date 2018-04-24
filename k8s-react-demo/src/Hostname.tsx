import axios from 'axios';
import * as React from "react";


interface IHostnameState {
    hostname: string;
}

export class Hostname extends React.Component<{},IHostnameState> {
    constructor(props: {}){
        super(props);
        this.state = this.getInitState();
    }

    public render() {
        const hostname = this.state.hostname;
        return( 
        <div className="Hostname">
            {hostname}
        </div>
        )
    }



    private getInitState():IHostnameState {

        axios.get("https://api.github.com/users/matmerr").then(response => {
            this.setState({hostname: response.data.blog})
        
        })
        return {hostname: "unable to contact backend"}
    }



}