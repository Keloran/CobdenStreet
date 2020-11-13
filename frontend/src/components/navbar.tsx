import React, {
  Component,
  MouseEvent,
} from 'react';
import {
  Container,
  Menu,
} from 'semantic-ui-react';
import {
  NavLink,
} from 'react-router-dom';
import {
  FontAwesomeIcon,
} from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHamburger,
  faHome,
  faHouseDamage,
  faListAlt,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (event: MouseEvent, data: any) => {
    this.setState({ activeItem: data.name });
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as={ NavLink } to='/' name='home' active={ activeItem === 'home' } onClick={ this.handleItemClick }>
            <FontAwesomeIcon icon={faHome} className='menuIcon' />
            Cobden Street
          </Menu.Item>
          <Menu.Item as={ NavLink } to='/shopping' name='shopping' active={ activeItem === 'shopping' } onClick={ this.handleItemClick }>
            <FontAwesomeIcon icon={faCartPlus} className='menuIcon' />
            Shopping
          </Menu.Item>
          <Menu.Item as={ NavLink } to='/recipe' name='recipe' active={ activeItem === 'recipe' } onClick={ this.handleItemClick }>
            <FontAwesomeIcon icon={faUtensils} className='menuIcon' />
            Recipe
          </Menu.Item>
          <Menu.Item as={ NavLink } to='/todo' name='todo' active={ activeItem === 'todo' } onClick={ this.handleItemClick }>
            <FontAwesomeIcon icon={faListAlt} className='menuIcon' />
            ToDo
          </Menu.Item>
          <Menu.Item as={ NavLink } to='/meals' name='meals' active={ activeItem === 'meals' } onClick={ this.handleItemClick }>
            <FontAwesomeIcon icon={faHamburger} className='menuIcon' />
            Meal Planner
          </Menu.Item>
          <Menu.Item as={ NavLink } to='/house' name='house' active={ activeItem === 'house' } onClick={ this.handleItemClick }>
            <FontAwesomeIcon icon={faHouseDamage} className='menuIcon' />
            House Stuff
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}
