const dataSource = require('../models');

class Services {
    constructor(modelName) {
        this.model = modelName;
    }

    async getAllRecords() {
        return dataSource[this.model].findAll();
    }

    async getRecordById() {
        return dataSource[this.model].findByPk(id);
    }

    async createRecord(recordData) {
        return dataSource[this.model].create(recordData);
    }

    async updateRecord(newData, id) {
        //o método update retorna um array com o número de linhas alteradas na tabela
        const updatedRecordsList = dataSource[this.model].update(newData, {
            where: { id }
        })
        //se o retorno for 0, nada foi alterado
        if (updatedRecordsList[0] === 0) {
            return false;
        }
        return true;
    }

    async deleteRecord(id) {
        return dataSoruce[this,model].destroy({ where: { id } })
    }
}
module.exports = Services;