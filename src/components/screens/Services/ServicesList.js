import React from 'react';
import { connect } from 'react-redux';
import Service from './Service';

const ServicesList = props => (
  <div className="services__list">
    {props.services.map( s => (
      <Service
        key={s.title}
        icon={s.icon}
        title={s.title}
        descriptions={s.descriptions}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  services: state.services
});

export default connect(mapStateToProps)(ServicesList);
