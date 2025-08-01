class Controller {
    constructor (serviceEntity) {
        this.serviceEntity = serviceEntity;
    }

    async getAll(req, res) {
        try {
            const recordsList = await this.serviceEntity.getAllRecords();
            return res.status(200).json(recordsList);
        } catch (e) {
            return res.status(500).json(e.message);
        }
    }

    async getById(req, res) {
        const { id } = req.params;
        try {
            const record = await this.serviceEntity.getRecordById(Number(id));
            return res.status(200).json(record);
        } catch (e) {
            return res.status(500).json(e.message);
        }
    }

    async create(req, res) {
        const data = req.body;
        try {
            const createdRecord = await this.serviceEntity.createRecord(data);
            return res.status(200).json(createdRecord);
        } catch(e) {
            return res.status(500).json(e.message);
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
            return res.status(500).json(e.message);
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            await this.serviceEntity.deleteRecord(Number(id));
            return res.status(200).json({ message: `id ${id} deletado`});
        } catch (e) {
            return res.status(500).json(e.message);
        }
    }
}

module.exports = Controller;