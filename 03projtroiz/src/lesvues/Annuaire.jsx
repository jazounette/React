import React, { PureComponent } from 'react';

class Annuaire extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { toto: "prout", titi, tata }
    }

    render() {
        return (
            <div>
                {this.state.toto}
                MMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWWWWWWWWWWWWW
            </div>
        );
    }
}

export default Annuaire;