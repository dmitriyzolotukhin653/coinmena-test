import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';

import './Trade.css'
import useBearStore from "../store";
import React, {useEffect, useState} from "react";
import {AssetOptions} from '../types'

const Trade = () => {
    const [optionsAssets, setOptionsAssets] = useState<AssetOptions[]>([])
    const [selectedOption, setSelectedOption] = useState(optionsAssets[0])
    const [amountOfAssets, setAmountOfAssets] = useState('')
    const [amountOfUSD, setAmountOfUSD] = useState('')
    const [isReverse, setIsReverse] = useState(false)

    useEffect(() => {
        if (selectedOption) {
            const selectedAsset = assets.filter(asset => selectedOption.value === asset.id)[0]
            if (isReverse) {
                if (amountOfUSD) {
                    setAmountOfAssets(String((parseInt(amountOfUSD)/selectedAsset.metrics.market_data.price_usd).toFixed(4)))
                }
            } else {
                if (amountOfAssets) {
                    if (selectedAsset) {
                        setAmountOfUSD(String((selectedAsset.metrics.market_data.price_usd * parseInt(amountOfAssets)).toFixed(4)))
                    }
                }

            }

        }
    }, [selectedOption, amountOfAssets, amountOfUSD])

    const handleChangeDropdown = (e: any) => {
        setSelectedOption(e)
    }

    const handleChangeAssetAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmountOfAssets(e.target.value)
    }

    const handleChangeUSDAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmountOfUSD(e.target.value)
    }

    const assets = useBearStore((state) => state.assets)
    const isAuth = useBearStore((state) => state.isAuth)

    useEffect(() => {
        if (assets.length) {
            const reorgAssets = assets.map(asset => ({label: asset.slug, value: asset.id}))
            setOptionsAssets(reorgAssets)
        }
    }, [assets])

    if (!isAuth) {
        return (
            <div>Login Please. You can trade only after login</div>
        )
    }
    return (
        <>
            <main className="sc-ebxalf-0 kWgKEJ">
                <div className="sc-jhay2b-0 jiwoSg">
                    <div className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-1 hJYFVB gBBPoP frnZMK">
                        <div className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-4 hJYFVB gBBPoP leSroW">
                            <div className="sc-18nh1jk-0 iFIBDN css-dz8bsg" style={{marginRight: '8px'}}>Swap</div>
                        </div>
                    </div>
                </div>
                <div className="gDEdVO">
                    <div className={`trade-view ${isReverse && 'trade-view-reverse'}`}>
                        <div className="elem-container">
                            <div className="fLCXPB">
                                <div className="gaWxfl">
                                    <div className="bscrY">
                                        <input className="jSMOMh DhJIB"
                                               inputMode="decimal" type="number"
                                               placeholder="0.0"
                                               disabled={isReverse}
                                               value={amountOfAssets}
                                               onChange={handleChangeAssetAmount}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown-container">
                                <Dropdown
                                    options={optionsAssets} onChange={handleChangeDropdown}
                                    value={selectedOption} placeholder="Select asset"
                                    controlClassName="dropdown"/>
                            </div>
                        </div>
                        <div className="gxCZaW" onClick={() => setIsReverse(!isReverse)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                 fill="none" stroke="#6E727D">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <polyline points="19 12 12 19 5 12"></polyline>
                            </svg>
                        </div>
                        <div className="elem-container">
                            <div className="fLCXPB">
                                <div className="gaWxfl">
                                    <div className="bscrY">
                                        <input
                                            className="jSMOMh DhJIB token-amount-input"
                                            inputMode="decimal" type="number"
                                            placeholder="0.0"
                                            disabled={!isReverse}
                                            value={amountOfUSD}
                                            onChange={handleChangeUSDAmount}/>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown-container">
                                USD
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Trade