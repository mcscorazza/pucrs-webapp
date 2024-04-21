import axios from 'axios'
import { useEffect, useState } from 'react';
import ModalUnits from '../components/ModalUnits';

const Units = () => {

  const [openModal, setOpenModal] = useState(false);
  const [unitData, setUnitData] = useState([]);

  const getData = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/v1/units/");
    setUnitData(response.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <table className='text-xl w-[300px]'>
        <thead>
          <tr><th className='w-10 text-center'>ID</th><th className='w-10'>U.M.</th><th className='w-30'>Descrição</th></tr>
        </thead>
        <tbody>
          {unitData?.map((unit) => (
            <tr key={unit.id}>
              <td className='w-10 text-center border-y-2'>{unit.id}</td>
              <td className='w-10 text-center border-y-2'>{unit.short}</td>
              <td className='w-10 text-center border-y-2'>{unit.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalUnits isOpen={openModal} setModal={() => setOpenModal(false)} />
      <button className='p-3 rounded-md border mt-4 bg-sky-950 text-white hover:bg-sky-900 text-xl' onClick={() => setOpenModal(true)}>Inserir Novo</button>
    </>
  )
}

export default Units