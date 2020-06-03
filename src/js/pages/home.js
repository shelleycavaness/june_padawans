
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchModules, fetchSkills} from '../store/tree'

// import api from '../utils/api'

const Home = () => {
    const dispatch = useDispatch()
    const moduleIsLoading = useSelector(state => state.tree.modules.isLoading)
    const modulesCollection = useSelector(state => state.tree.modules.collection)
    const skillCollection = useSelector(state => state.tree.skills.collection)

    useEffect(() => {
        dispatch(fetchModules()),
        dispatch(fetchSkills())
    }, [])

    if (moduleIsLoading) return <span>Modules are loading</span>
    const seeModules =  modulesCollection && modulesCollection.map(item => 
      <li key={item.id}>{item.module_name }  </li>)
    const seeSkills =  skillCollection && skillCollection.map(item => <p  key={item.id}>{ item.skill_name } </p>)   

    return (
        <section>
          <h1>Home</h1>
          <div>
            <ul style={{listStyle:'none'}}>
            { seeModules }
            </ul>
          </div>
          <br/>
          <button onClick={() => dispatch({ type: 'CLEAR_MODULES' })}> Clear modules </button>

        { 
         // {/* skillCollection && skillCollection.map(item => <p  key={item.id}>{ item.skill_name } </p>)   */}
          seeSkills
        }
        </section>
    )
}

export default Home


 // useEffect(() => {
    //     dispatch({ type: 'FETCH_MODULES' });
    //     api
    //         .get('/modules/')
    //         .then(response => {
    //             let result = response.data.data
    //             dispatch({ type: 'SET_MODULES', payload: result });
    //         })
    // }, [])