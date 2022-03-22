import { useState } from 'react';
import './Tab.css'



const Tab = (props) => {
    const [contenidoTab, setSelectTab] = useState( [] );
    
    let tabs = props.tabArray;

    return (
        <div className='container'>
            <header>{
                tabs.map( (item, i) => 
                    <div key={ i } onClick={ () => setSelectTab(item.propiedad) } tabindex="0">
                        {item.etiqueta}
                    </div> )
            }</header>
            <main>
                {contenidoTab}
            </main>
        </div>
    );
};

export default Tab;