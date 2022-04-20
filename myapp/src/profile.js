import React from 'react';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastname: '',
            email: '',
            phone: '',
            city: '',
            state: '',
            country: '',
        };
    }

    render() {
        return (
            <div>
                <ul>
                    <li>Nombre: {this.props.name} </li>
                    <li>Apellido: {this.props.lastname}</li>
                    <li>Mail: {this.props.email}</li>
                    <li>Telefono: {this.props.phone}</li>
                    <li>Ciudad: {this.props.city}</li>
                    <li>Provincia: {this.props.state}</li>
                    <li>Pais: {this.props.country}</li>
                </ul>
            </div>
        );
    }
}