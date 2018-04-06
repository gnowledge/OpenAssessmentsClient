import React          from 'react';
import { Link } from 'react-router';
import assets         from '../../../libs/assets';
import BanksView      from '../bank_navigation/navigation_bar_content';
import AssessmentView from '../assessments/navigation_bar_content';
import HelpLink       from '../assessments/help_link';

export default function heading(props) {
  const logo = assets('./_author/images/CLIx-logo.png');

  const content = () => {
    switch (props.view) {
      case 'banks':
        return (
          <BanksView {...props} />
        );
      case 'assessments':
        return (
          <AssessmentView {...props} />
        );
      default:
        return props.children;
    }
  };

  return (
    <header className="au-c-header">
      <div className="au-c-header-top">
        <Link to="/" className="home-link" onClick={() => { props.updatePath(null); }}>
          <img src={logo} alt="Clix assessment authoring home" className="au-c-logo" />
        </Link>
        <HelpLink
          icon
          to="/help.html#getting-started-as-an-author"
        />
      </div>
      {content()}
    </header>
  );
}

heading.propTypes = {
  view: React.PropTypes.string,
  children: React.PropTypes.node,
  updatePath: React.PropTypes.func
};
