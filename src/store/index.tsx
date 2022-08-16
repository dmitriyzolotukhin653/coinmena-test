import create from 'zustand'
import { devtools } from 'zustand/middleware'
import {Datum} from '../types'

interface BearState {
    isAuth: boolean,
    auth: () => void,
    assets: Datum[],
    pushAssets: (key: Datum[]) => void
}

const useBearStore = create<BearState>()(
    devtools(
        ((set) => ({
            isAuth: false,
            auth: () => set((state) => ({ isAuth: !state.isAuth })),
            assets: [],
            pushAssets: (newAssets: Datum[]) => set((state) => {
                // const newAssetsArray = state.assets.concat(newAssets).filter((item) => state.assets.indexOf(item) < 0)
                let newAssetsArray = newAssets.reduce((previousValue, currentValue) => {
                    if (state.assets.findIndex(asset => asset.id === currentValue.id) < 0) {
                        return previousValue.concat(currentValue)
                    }
                    return previousValue
                }, state.assets)

                return {assets: newAssetsArray}
            })
        }))
    )
)

export default useBearStore;