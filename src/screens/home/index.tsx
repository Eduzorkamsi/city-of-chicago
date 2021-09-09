
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
    getPermits,
    toggleModal

} from "../../redux/action";
import storeType from "../../redux/types/storeType";
import PermitPropType from "./permitPropTypes"

const Home: React.FC<PermitPropType> = ({
    permits,
    getPermits,
    
}) => {

    const [showModal, setShowModal]=useState(false);
    
    const [currentPermit, setCurrentPermit]=useState<any>({});

    useEffect(() => {

        (async () => {
            let today = new Date().toISOString().slice(0, 10);
            await getPermits(today);
         
        })();
      
    }, [getPermits]);




 
    const renderPermits = () => {
     

        let permitsList = permits?.sort((a, b) => new Date(b.issue_date).valueOf() - new Date(a.issue_date).valueOf()).map((item:any, i:number ) => {
            if(i<10)
        {    return (  <tr className="" key={item.id +i +i}>
        <td className="pr-6 pl-3 text-left  py-4  overflow-x-auto text-sm text-gray-500">
            {item.id}
        </td>
        <td className="pr-6 pl-3 text-left  py-4  overflow-x-auto">
           
            {item.permit_}
          
        </td>
        <td className="pr-6 pl-3 text-left  py-4  overflow-x-auto">
            <div className="text-sm text-gray-500">    {item.permit_type}</div>
        </td>
      
        <td className="pr-6 pl-3 text-left  py-4  overflow-x-auto">
           
            {item.application_start_date}
          
        </td>
        <td className="pr-6 pl-3 text-left  py-4  overflow-x-auto">
         {item.issue_date}
        </td>
        
        <td className="pr-6 pl-3 text-left  py-4  overflow-x-auto">
            <a href="/#" className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full" onClick={()=>{setCurrentPermit(item);
            setShowModal(true);}}>View</a>
        </td>
       
    </tr>);}
        })

     
        return permitsList

    };

    return (
        <main className="container">
        
            <div>
  <nav className="bg-gray-800 w-full">
    <div className="max-w-7xl mx-auto px-4 sm:pr-6 pl-3 text-left  lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
           
              <a href="/#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>

        
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
        
       
         
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          {/* <!-- Mobile menu button --> */}
          <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            {/* <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/* <!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            --> */}
            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

  
  </nav>

  <header className="bg-white shadow">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6   lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">
        Recent Permits
      </h1>
    </div>
  </header>
  <main>
    <div className="max-w-7xl mx-auto py-3 sm:px-6  lg:px-8">
      {/* <!-- Replace with your content --> */}
      <div className="px-4 pb-6 sm:px-0">
        <div className="border-gray-200 rounded-lg h-96">
      
    <table className="divide-y divide-gray-300  w-full table-auto">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="pr-6 pl-3 text-left py-2 text-xs text-gray-500  overflow-x-auto">
                                ID
                            </th>
                            <th className="pr-6 pl-3 text-left py-2 text-xs text-gray-500">
                                Permit
                            </th>
                            <th className="pr-6 pl-3 text-left py-2 text-xs text-gray-500">
                            Permit Type
                            </th>
                           
                            <th className="pr-6 pl-3 text-left py-2 text-xs text-gray-500">
                                Application Start Date
                            </th>
                            <th className="pr-6 pl-3 text-left py-2 text-xs text-gray-500">
                              Issue Date
                            </th>
                            <th className="pr-6 pl-3 text-left py-2 text-xs text-gray-500">
                           
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-300">
                      
                     {renderPermits()}
                    </tbody>
                </table>
           
        </div>
      </div>
      {/* <!-- /End replace --> */}
    </div>
  </main>
</div>
    
{showModal?<div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 " onClick={()=>    setShowModal(false)}>
        <div className="max-w-lg p-6 bg-white divide-y divide-gray-500 h-4/5 w-full overflow-scroll">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl">{currentPermit?.id}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 cursor-pointer" fill="none" viewBox="0 0 24 24"
                onClick={()=> setShowModal(false)}
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </div>
            <div className="my-4">
            
                    
                {Object.keys(currentPermit).map((item:any,i:any)=>
          {  return(     <p className="mb-1 text-sm"> <span className="mr-2 font-bold" key={item}>{item}: </span> 
          {JSON.stringify(Object.values(currentPermit)[i])}
             </p>
          )
        
        }
                  
                  )  }
                
              
                <button className="px-4 py-2 text-white bg-red-600 rounded mt-4"   onClick={()=> setShowModal(false)} >Close</button>
            
            </div>
        </div>
    </div>:null}
  

        </main>

    );
};

const mapStateToProps = (state: storeType) => {
    return {
        permits: state.permits,
    };
};

export default connect(mapStateToProps, {
    getPermits,
    toggleModal

})(Home);



