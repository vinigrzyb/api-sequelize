class Controller {
    constructor (serviceEntity) {
        this.serviceEntity = serviceEntity;
    }

    async getAll(req, res) {
        try {
            const recordsList = await this.serviceEntity.getAllRecords();
            return res.status(200).json(recordsList);
        } catch (e) {
            //erro
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const newData = req.body;

        try {                                                    // dados    where
            const isUpdated = await this.serviceEntity.updateRecord(newData, Number(id));
            if (!isUpdated) {
                return res.status(400).json({ message: 'Registro não foi atualizado' });
            }
            return res.status(200).json({ message: 'Atualizado com sucesso' });
        } catch (e) {
            //erro
        }
    }
}

module.exports = Controller;