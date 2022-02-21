import fileApi from '@/apiModules/request/API/fileApi'
import h5editorApi from '@/apiModules/request/API/h5editorApi'

const indexApi = {
    ...fileApi,
    ...h5editorApi
}

export default indexApi
