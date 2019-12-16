//получение данных с сервера
export default function getData() {
    const goodsWrapper = document.querySelector('.goods');
    return fetch('../db/db.json')
    .then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error ('Данные не были получены, ошибка: ' + response.status);
        }
    })
    .then(data => { //jsonplaceholder.com
        return data;
    })
    .catch(err => {
        console.warn(err);
        goodsWrapper.innerHTML = '<div style="font-size: 25px"">Упс, что-то пошло не так. :(</div>';
    });
}
//end получение данных с сервера