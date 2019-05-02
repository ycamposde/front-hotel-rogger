import React, {Component} from 'react';
import { Avatar, Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import logoIsotipe from './img/logo-hotel.png';
import iApps from './img/i-apps.svg';

// Scenes
import Dashboard from './scenes/Dashboard';

import './styles.css';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Private extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render() {
    return (
      <Layout style={{ padding: 0, height: 'calc(100vh - 0px)' }}>
        <Sider
          trigger={null}
          collapsible
          width={60}
          style={{ 
            width: '60px',
            maxWidth: '60px',
            minWidth: '60px',
            boxShadow: 'inset 0 1px 3px 0 rgba(0,0,0,0.5), 1px 0 0 0 #EAEDF3'
          }}
        >
          <div>
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, boxShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 3px 0px inset, rgb(234, 237, 243) 0px 0px 0px 0px' }}>
              <Link to="/" className='logo-hotel-rogger'>
                <img className='logo-img' alt="logo" src={logoIsotipe} />
              </Link>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                margin: 'auto',
                textAlign: 'center',
                padding: '15px 0'
              }}
            >
              <a
                href='javascript:void(0)'
                className='menu-item-circle-xl'
              >
                <img alt="iapps" src={iApps} />
              </a>

              <a
                href='javascript:void(0)'
                className='menu-item-circle'
              >
                <i className="fas fa-info-circle"></i>
              </a>

              <a
                href='javascript:void(0)'
                className='menu-item-circle'
                style={{
                  marginBottom: '14px'
                }}
              >
                <i className="fas fa-cog"></i>
              </a>
              <a href='javascript:void(0)' onClick={() => {
                this.setState({
                  visible_menu_usuario: true
                });
              }
              }>
                <Avatar
                  src="https://www.nicepng.com/png/detail/128-1280036_jpg-free-stock-female-vector-user-user-female.png"
                  style={{
                    width: '39px',
                    height: '39px',
                    border: '2px solid #FFF',
                    margin: 'auto',
                    display: 'inline-block'
                  }}
                />
              </a>
            </div>
          </div>
        </Sider>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{ background: '#f4f5f7' }}
        >
          <div className="logo">
            <p style={{ fontSize: 18, textAlign: 'center' }}>HOTEL ROGGER</p>
          </div>
          <Menu mode="inline" defaultSelectedKeys={['1']} style={{ background: '#f4f5f7' }}>
            <Menu.Item key="1">
              <Link to="dashboard" />
              <i class="fal fa-tachometer-alt-slowest"></i>
              <span style={{ marginLeft: '10px' }}>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="ok" />
              <i class="fal fa-user-friends"></i>
              <span style={{ marginLeft: '10px' }}>Cuentas</span>
            </Menu.Item>
            <Menu.Item key="3">
              <i class="fal fa-bed"></i>
              <span style={{ marginLeft: '10px' }}>Reserva</span>
            </Menu.Item>
            <Menu.Item key="4">
              <i class="fal fa-booth-curtain"></i>
              <span style={{ marginLeft: '10px' }}>Habitación</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><i class="fal fa-cog"></i><span style={{ marginLeft: '10px' }}>Configuracion</span></span>}
              style={{ background: '#f4f5f7' }}
            >
              <Menu.Item key="5">Usuario</Menu.Item>
            </SubMenu>
            <Menu.Item key="10">
              <i class="fal fa-chart-bar"></i>
              <span style={{ marginLeft: '10px' }}>Reporte</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: 0 }}>
          <Content style={{
            margin: 0, padding: 15, background: '#fff',
          }}
          >
            <Switch>
              <Route
                path="/dashboard"
                name="Dashboard"
                render={(props) => (
                  <Dashboard
                    {...props}
                  />
                )}
              />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default Private;