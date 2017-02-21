import React from 'react';

class Index extends React.Component {

    render() {
        return (
            <html lang="en">
                <head>
                    <title>Car Catalogue</title>
                    <script dangerouslySetInnerHTML={{ __html:
                        `window.LANDING_DATA=${JSON.stringify(this.props.landingData)}`
                    }}/>
                    <link rel="stylesheet" type="text/css" href="/css/theme.css"/>
                </head>
                <body>
                    <div id="root" dangerouslySetInnerHTML={{ __html: this.props.html }}></div>
                    <script src={this.props.js}/>
                </body>
            </html>
        )
    }
}

export default Index;