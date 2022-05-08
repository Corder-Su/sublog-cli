import { getAll } from  './rc.js'
import download from 'download-git-repo'

export const downloadLocal = async (templateName, projectName) => {
    let config = await getAll();
    let api = `${config.registry}/${templateName}`
    return new Promise((resolve, reject) => {
        download(api, projectName, err => {
            if(err) {
                return reject(err)
            }
            resolve();
        })
    })
}