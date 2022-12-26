import {FC, useState} from 'react';
import Header from './components/shared/Header';
import Container from './components/layout/Container';
import Registration from './components/shared/Registration';
import UsersTable from './components/shared/table/UsersTable';
import Content from './components/shared/Content';
import Statistics from './components/shared/Statistics';
import Modal from './components/shared/modal/Modal';
import './App.css';

const App: FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const handleForm = (value: boolean) => {
    setShowForm(value);
  }

  const handleModal = (value: boolean) => {
    setShowModal(value);
  }

  return (
    <>
      {showModal && <Modal handleModal={handleModal} />}
      <div>
        <Header />
        <Container>
          <Content />
          <Statistics />
        </Container>
        <Container>
          <Registration showForm={showForm} handleForm={handleForm} />
          {showForm && <UsersTable />}
        </Container>
      </div>
    </>
  );
}

export default App;
