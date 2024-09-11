import db from '../models/index'


class APIProvinceController {

    handleGetCity = async (req, res) => {

        try {
            await fetch("https://vapi.vnappmob.com/api/province").then(async (response) => {
                if (!response.ok) {
                    return res.status(505).json({
                        errMessage: "Lỗi API Province!"
                    })
                    throw new Error(`Response status: ${response.status}`);
                }
                const data = await response.json();
                return res.status(200).json({
                    data: data?.['results']
                });
            });

        } catch (error) {
            console.error(error.message);
        }
    }

    handleGetDistrict = async (req, res) => {
        const {provinceId} = req.query;
        try {
            await fetch(`https://vapi.vnappmob.com/api/province/district/${provinceId}`, {}).then(async (response) => {
                if (!response.ok) {
                    return res.status(505).json({
                        errMessage: "Lỗi API Province!"
                    })
                    throw new Error(`Response status: ${response.status}`);
                }
                const data = await response.json();
                return res.status(200).json({
                    data: data?.['results']
                });
            });

        } catch (error) {
            console.error(error.message);
        }
    }
    handleGetWard = async (req, res) => {
        const {districtId} = req.query;
        try {
            await fetch(`https://vapi.vnappmob.com/api/province/ward/${districtId}`, {}).then(async (response) => {
                if (!response.ok) {
                    return res.status(505).json({
                        errMessage: "Lỗi API Province!"
                    })
                    throw new Error(`Response status: ${response.status}`);
                }
                const data = await response.json();
                return res.status(200).json({
                    data: data?.['results']
                });
            });

        } catch (error) {
            console.error(error.message);
        }
    }

}

module.exports = new APIProvinceController;