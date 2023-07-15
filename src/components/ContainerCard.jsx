import React , {useState} from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {data} from "../helpers/data";
import PlayerCard from "./PlayerCard";

const ContainerCard = () => {
    const [search , setSearch] = useState("")
    

    const handleChange =(e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }
    console.log(search)

    const filteredData = data.filter(item => item.name.toLowerCase().includes(search.trim().toLowerCase()))
    console.log("filter" , filteredData)

  return (
    <>
        <Form.Control type="search" placeholder="Search Archers.." onChange={handleChange} />

        <Container className='p-3 rounded-4 card-container  my-3  '>
            <Row xs={1} md={2} lg={5} className='justify-content-center g-4 '>
                

                {filteredData.map((player , i)=>(
                        <PlayerCard key = {i}
                        {...player} />

                    ))}
            </Row>
        </Container>
    </>
  )
}

export default ContainerCard
