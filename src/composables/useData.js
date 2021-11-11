import { ref } from 'vue'
import dataSet from '../assets/data/data.json'

export default function useData(page = 'destination') {
    const current = ref(0)
    const pageData = dataSet[page]

    return {
        current,
        pageData,
    }
}
