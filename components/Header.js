import React  from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import { Link } from '../routes';
import {connect} from 'react-redux';
import actions from '../redux/actions/authActions';
import createAuth0Client from '@auth0/auth0-spa-js';
import HeaderSegment from './HeaderSegment'
 

const HomepageHeading = ({ mobile }) => (
  
  <Container text>
    <Header
      as='h1'
      content='Wine Tripping'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Find your favorite region with us...'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Plan a trip
      <Icon name='right arrow' />
    </Button>
  </Container>
)

class Auth0Connection extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
       auth0Client: null,
       isLoading: true,
       isAuthenticated: false,
       user: [],
    }
    
    /*this.config = {
      domain: (process.env.REACT_APP_AUTH0_DOMAIN || 'dev-14avhjuy.auth0.com'),
      client_id: (process.env.REACT_APP_AUTH0_CLIENT_ID || '7Up0zsX4UTdTCL6330KIhTUJeVI1JUjO'),
      redirect_uri: (process.env.CALLBACK_URL || 'https://eth-arcus.herokuapp.com')
    };*/


    this.config = {
      domain: (process.env.REACT_APP_AUTH0_DOMAIN || 'dev-14avhjuy.auth0.com'),
      client_id: (process.env.REACT_APP_AUTH0_CLIENT_ID || 'ZJ14f961zjftMYbOBnZPnEGJd3ZHyQJC'),
      redirect_uri: (process.env.CALLBACK_URL || 'http://localhost:3000/')
    };
    
    
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
 };

 componentDidMount() {
  this.initializeAuth0();
}

// initialize the auth0 library
initializeAuth0 = async () => {
  const auth0Client = await createAuth0Client(this.config);
  console.log('auth0Client : '+JSON.stringify(auth0Client));
  this.setState({ auth0Client });

  // check to see if they have been redirected after login
  if (window.location.search.includes('code=')) {
    return this.handleRedirectCallback();
  }

  const isAuthenticated = await auth0Client.isAuthenticated();
  const user = isAuthenticated ? await auth0Client.getUser() : null;
  console.log('user : '+JSON.stringify(user));
  
  this.setState({ isLoading: false, isAuthenticated, user });
};

handleRedirectCallback = async () => {
  this.setState({ isLoading: true });

  await this.state.auth0Client.handleRedirectCallback();
  const user = await this.state.auth0Client.getUser();

  this.setState({ user, isAuthenticated: true, isLoading: false });
  window.history.replaceState({}, document.title, window.location.pathname);
};

 login(e) {
  const { auth0Client} = this.state;
    //this.setState({data: e.target.value});
    auth0Client.loginWithRedirect({
      redirect_uri: 'http://localhost:3000/'
    }).then(token => {
      auth0Client.getUser().then(user => {
        this.setState({ user});
        console.log('---here--'+user);
      });
    });
 }

 logout(e){
  const { auth0Client} = this.state;
  auth0Client.logout();
 }

 render() {

  
    return (
       <div>
          <DesktopContainer auth0={this.state}
             login={this.login} logout={this.logout}>
             </DesktopContainer>
             <MobileContainer auth0={this.state}
             login={this.login} logout={this.logout}>
             </MobileContainer>
               
       </div>
    );
 }
 

  
  

} 

class DesktopContainer extends React.Component {
  constructor(props) {
    super(props);
    
  }  
    
  state = {};
  
  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })


  render() {
    
    console.log('Desktop');
    const { children } = this.props
    const { fixed } = this.state

    
    return (
      
      <Responsive {...Responsive.onlyComputer}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Explore</Menu.Item>
                <Menu.Item as='a'>Plan Trip</Menu.Item>
                <Menu.Item as='a'>Sommelier</Menu.Item>
                <Menu.Item position='right'>
                {!this.props.auth0.isLoading && !this.props.auth0.user && (
                  <Button as='a' onClick={this.props.login}  inverted={!fixed}>
                    Log in
                  </Button>
                )}
                 {!this.props.auth0.isLoading && this.props.auth0.user && (
                  <>
                  <h1>{this.props.auth0.user.name}</h1>
                  <Button as='a' onClick={this.props.logout}  inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Logout
                  </Button>
                  </> 
                )}   
                </Menu.Item>
              </Container>
            </Menu>
            {!this.props.auth0.isLoading && this.props.auth0.user && (
              <>
                <h1>You are logged in!</h1>
                <p>Hello {this.props.auth0.user.name}--{this.props.auth0.user.email}--</p>
                {this.props.auth0.user.picture && <img src={this.props.auth0.user.picture} alt="My Avatar" />}
                
              </>
            )}
            {!this.props.auth0.isLoading && !this.props.auth0.user && (
            <HomepageHeading />
            )}
          </Segment>
        </Visibility>
        {!this.props.auth0.isLoading && !this.props.auth0.user && (
        <HeaderSegment></HeaderSegment>
        )}
      </Responsive>
    )
  }
}



class MobileContainer extends React.Component {
  constructor(props) {
    super(props);
    
  } 
  state = {}
  
  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    console.log('mobile');
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Explore</Menu.Item>
            <Menu.Item as='a'>Plan Trip</Menu.Item>
            <Menu.Item as='a'>Sommelier</Menu.Item>
            {!this.props.auth0.isLoading && !this.props.auth0.user && (
            <Menu.Item as='a' onClick={this.props.login}>Log in</Menu.Item>
            )}
            {!this.props.auth0.isLoading && this.props.auth0.user && (
            <Menu.Item as='a' onClick={this.props.logout}>Logout</Menu.Item>
            )}
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                  {!this.props.auth0.isLoading && !this.props.auth0.user && (
                    <Button as='a' onClick={this.props.login}  inverted>
                      Log in
                    </Button>
                  )} 
                  {!this.props.auth0.isLoading && this.props.auth0.user && (
                    <Button as='a' onClick={this.props.logout} inverted style={{ marginLeft: '0.5em' }}>
                      Logout
                    </Button>
                  )} 
                  </Menu.Item>
                </Menu>
              </Container>
              {!this.props.auth0.isLoading && !this.props.auth0.user && (
                <HomepageHeading mobile />
              )}  
            </Segment>

            {!this.props.auth0.isLoading && !this.props.auth0.user && (
                <HeaderSegment></HeaderSegment>
            )}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}


export default connect(state => state, actions)(Auth0Connection);

