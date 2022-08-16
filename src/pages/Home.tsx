import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

import './Home.css'
import Button from '../components/Button'
import Input from "../components/Input";
import React, {useEffect, useState} from "react";
import useBearStore from "../store";
import {Pokedex, Datum} from '../types'

const getURL = (page: number = 1) => `https://data.messari.io/api/v2/assets?fields=id,slug,symbol,metrics/market_data/price_usd&page=${page}`

const fetchAssets = (pageParam: number): Promise<Pokedex> => {
    return axios.get(getURL(pageParam)).then(response => response.data)
}


const Home = () => {
    const navigate = useNavigate();

    const [search, setSearch] = useState('')
    const [lastPage, setLastPage] = useState(1)

    const {
        data,
        isFetched
    } = useQuery(
        ['assets', lastPage],
        () => fetchAssets(lastPage)
    )
    const {assets, pushAssets} = useBearStore((state) => state)


    useEffect(() => {
        if (isFetched && data) {
            pushAssets(data.data)
        }
    }, [data])

    const handleFetchNextPage = () => {
        setLastPage(lastPage + 1)
    }


    return (
        <div className="page-container">
            <div className="input-container">
                <Input type="text" placeholder="Search" value={search} onChange={setSearch}/>
            </div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th><label>price</label> <span></span></th>
                    <th><label>icon</label> <span></span></th>
                    <th><label>name</label> <span></span></th>
                    <th><label>action</label> <span></span></th>
                </tr>
                </thead>
                <tbody>
                {assets?.filter((asset: Datum) => search ? asset.slug.includes(search) : true).map((asset: Datum) => (
                    <tr key={asset.id}>
                        <td>{asset.metrics.market_data.price_usd}</td>
                        <td>{asset.slug}</td>
                        <td>{asset.symbol}</td>
                        <td><Button title="Buy/Sell" onClick={() => navigate('/trade')}/></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="button-container">
                <Button title="More" onClick={handleFetchNextPage}/>
            </div>
        </div>

    )
}

export default Home