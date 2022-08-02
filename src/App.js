import './App.css';
import Layout from './component/layout/Layout';
import '../src/assets/boxicons/css/boxicons.min.css';
// import MouseParticles from "react-mouse-particles";
// import SplineCrm from './component/spline3d/SplineCrm';


function App() {
  return (
    <div className="App">
     {/* <SplineCrm /> */}
     {/* <MouseParticles
          g={1}
          color="#f50057"
          cull="MuiSvgIcon-root,MuiButton-root"
          level={6}
        /> */}
     <Layout />
    </div>
  );
}

export default App;
