import {useEffect, useState} from "react";
import {USER_LEVELS} from "../../../helpers/constants";
import userApis from "../../../api/baseAdmin/user";
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";

export default function UserFormElement({isUpdate = false})
{
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        setValue
    } = useForm({
        defaultValues: {
            name: '',
            phone: '',
            level: USER_LEVELS.levels.user.value.toString()
        }
    });
    let urlParams = useParams()

    useEffect(() => {
        if (isUpdate) {
            (
                async () => {
                    const userResponse = await userApis.show(urlParams.userId);

                    if (userResponse.success) {
                        setValue('name', userResponse.data[0].name)
                        setValue('phone', userResponse.data[0].phone)
                        setValue('level', userResponse.data[0].level.toString())
                    }
                }
            )()
        }
    }, [isUpdate, urlParams])

    const store = async (data) => {
        const userResponse = await userApis.store(data);

        if (userResponse.success) {
            alert('Store user success');
            return;
        }
        userResponse.errors.forEach((error) => {
            const [key, value] = Object.entries(error)[0]
            setError(key, {
                type: 'server',
                message: value.message
            })
        })
    }

    const update = async (data) => {
        const userResponse = await userApis.update(urlParams.userId, data);

        if (userResponse.success) {
            alert('Update user success');
            return;
        }
        userResponse.errors.forEach((error) => {
            const [key, value] = Object.entries(error)[0]
            setError(key, {
                type: 'server',
                message: value.message
            })
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit(isUpdate ? update : store)}>
                <div className={'p-3 col-6'}>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Họ tên</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            {...register('name', {
                                required:'Họ tên không được để trống',
                                maxLength: {
                                    value: 50,
                                    message: "Họ tên không được lớn hơn 50 ký tự"
                                }
                            })}
                        />
                        {errors.name && <p className={'text-danger fw-bold'}>{errors.name.message}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPhone" className="form-label">Số điện thoại</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputPhone"
                            {...register('phone', {
                                required:'Số điện thoại không được để trống',
                                maxLength: {
                                    value: 11,
                                    message: "Số điện thoại không được lớn hơn 11 ký tự"
                                },
                                minLength: {
                                    value: 10,
                                    message: "Số điện thoại không được ít hơn 50 ký tự"
                                }
                            })}
                        />
                        {errors.phone && <p className={'text-danger fw-bold'}>{errors.phone.message}</p>}
                    </div>
                    <div className={'mb-3'}>
                        <div>
                            <label className="form-label">Phân quyền</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="inputLevelAdmin"
                                value={USER_LEVELS.levels.admin.value.toString()}
                                {...register('level')}
                            />
                            <label className="form-check-label" htmlFor="inputLevelAdmin">
                                { USER_LEVELS.levels.admin.label }
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="inputLevelUser"
                                value={USER_LEVELS.levels.user.value.toString()}
                                {...register('level')}
                            />
                            <label className="form-check-label" htmlFor="inputLevelUser">
                                { USER_LEVELS.levels.user.label }
                            </label>
                        </div>
                        {errors.level && <p className={'text-danger fw-bold'}>{errors.level.message}</p>}

                    </div>

                </div>
                <div className="card-footer">
                    {
                        (() => {
                            if (isUpdate){
                                return (
                                    <button
                                        className={'btn btn-success'}
                                    >Cập nhật</button>
                                );
                            }

                            return (
                                <button
                                    className={'btn btn-primary'}
                                >
                                    Thêm mới
                                </button>
                            );
                        })()
                    }
                </div>
            </form>
        </>
    )
}