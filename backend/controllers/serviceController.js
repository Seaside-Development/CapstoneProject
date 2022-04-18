// @desc Get all Service
// @route GET /api/services
// @access Private
const getServices = async (req, res) => {
    res.status(200).json({message: 'Get Services'});
}

// @desc Set Service
// @route POST /api/services
// @access Private
const setService = async (req, res) => {
    res.status(200).json({message: 'Set Services'});
}

// @desc Update Service
// @route PUT /api/services/:id
// @access Private
const updateService = async (req, res) => {
    res.status(200).json({message: `update Services ${req.params.id}`});
}


// @desc Delete Service
// @route DELETE /api/services/:id
// @access Private
const deleteService = async (req, res) => {
    res.status(200).json({message: `Delete Services ${req.params.id}`});
}

module.exports = {
    getServices, setService, updateService, deleteService
}