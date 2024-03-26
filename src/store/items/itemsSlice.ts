import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

import airpod from '../../assets/items/airpod.png'
import assistenteVirtual from '../../assets/items/assistente-virtual.png'
import almofadaAssento from '../../assets/items/assento.png'
import capaVolanteCouro from '../../assets/items/capa-volante-couro.png'

const initialState = [
  {
    titulo: 'Assistente virtual',
    descricao:
      'Conheça nosso smart speaker de maior sucesso ainda melhor. O novo design de áudio com direcionamento frontal (1 speaker de 1,6") garante mais graves e um som completo.',
    foto: assistenteVirtual,
    favorito: false,
    preco: 285,
    id: uuid(),
    categoria: 'eletronicos',
  },
  {
    titulo: 'AirPods com Estojo de Recarga',
    descricao:
      'Os AirPods ligam automaticamente e estão sempre conectados e sabem quando estão nos seus ouvidos e pausam quando são tirados. Para ajustar o volume, trocar de música, fazer uma ligação.',
    foto: airpod,
    favorito: false,
    preco: 900,
    id: uuid(),
    categoria: 'eletronicos',
  },
  {
    titulo: 'Almofada de assento',
    descricao:
      'Feito de material de couro, confortável e suave. Couro ambiental natural dá uma sensação delicada. Adequado para uso durante todo o ano. Com as funções de aquecimento e ventilação do assento de carro podem ser usadas normalmente.',
    foto: almofadaAssento,
    favorito: false,
    preco: 45.9,
    id: uuid(),
    categoria: 'automotivos',
  },
  {
    titulo: 'Capa de volante de couro',
    descricao:
      'Esta capa de volante feita de couro sintético, antiderrapante, respirável. 100% SEM ODOR: elástico saudável e ecológico, não tóxico, durável. Melhor aderência no volante proporciona uma ótima e confortável experiência de direção.',
    foto: capaVolanteCouro,
    favorito: false,
    preco: 150,
    id: uuid(),
    categoria: 'automotivos',
  },
]

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    changeFavorite: (state, { payload }) => {
      state = state.map((item) => {
        if (item.id === payload) item.favorito = !item.favorito

        return item
      })
    },
  },
})

export const { changeFavorite } = itemsSlice.actions

export default itemsSlice.reducer
