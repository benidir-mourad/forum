import { EditOutlined, FileOutlined, PlusOutlined, QuestionOutlined } from '@ant-design/icons'

export const menuItem = [
    {
        id: 1,
        title: 'Toutes les questions',
        icon: <QuestionOutlined/>,
        path: '/'
    },

    {
        id: 2,
        title: 'Mes questions',
        icon: <FileOutlined/>,
        path: '/questions'
    },

    {
        id: 3,
        title: 'Mes réponses',
        icon: <EditOutlined/>,
        path: '/reponses'
    }
]