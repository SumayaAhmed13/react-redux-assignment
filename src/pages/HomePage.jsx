import React from 'react';
import Layout from '../component/Layout';
import HeroList from '../component/HeroList';
import WorkList from '../component/WorkList';
import StatList from '../component/StatList';
import Featured from '../component/Featured';


 const HomePage = () => {
  return (
   <Layout>
       <HeroList/>
       <WorkList/>
       <StatList/>
       <Featured/>
    
   </Layout>
  )
}
export default HomePage
