async function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.onerror = (e) => reject(e);
    reader.readAsDataURL(file, 'base64');
  });
}

export function useFileText(props) {
  const { onResult } = { onResult: (r) => console.log(r), ...props}
  const readFile = (file) => readFileAsText(file)
    .then(data => {
      typeof onResult === 'function' ? onResult(data) : console.log('useFileText', data)
    }).catch(e => console.error(e))
  return { readFile }
}

export function useFilesTexts(props) {
  const { onResult } = { onResult: (r) => console.log(r), ...props}
  const readFiles = async (files) => {
    Promise.all(files.map(f => readFileAsText(f)))
    .then(data => {
      typeof onResult === 'function' ? onResult(data) : console.log('useFilesTexts', data)
    }).catch(e => console.error(e))
  }
  return { readFiles }
}