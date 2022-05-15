import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '8767d06533msh0cfead26c6fa2f6p131ceejsn51e89f635740'
}




const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

const baseUrl = 'https://coinranking1.p.rapidapi.com'

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (uuid) => createRequest(`/coin/${uuid}`),
        }),
        getCryptoHistory: builder.query({
            query: (uuid, timeperiod) => createRequest(`/coin/${uuid}/history${timeperiod}`),
        }),
        getExchanges: builder.query({
			query: () => createRequest(`/exchanges`),
		})
    })
})



export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery } = cryptoApi;