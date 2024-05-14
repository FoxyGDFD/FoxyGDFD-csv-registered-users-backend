import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';
import type { UserDto } from '../dto';

export class User extends Model<UserDto> {}

User.init(
  {
    'Are_you_planning_to_participate_in_the_exhibition-…_territory_of_innovations_from_May_24_to_27_2024_':
      {
        allowNull: true,
        type: DataTypes.STRING,
      },
    Checkbox: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Checkbox_2: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    'Co-author_1_Full_Name_E-mail_Position_Organization': {
      allowNull: true,
      type: DataTypes.STRING,
    },
    'Co-author_2_Full_Name_E-mail_Position_Organization': {
      allowNull: true,
      type: DataTypes.STRING,
    },
    'Co-author_3_Full_Name_E-mail_Position_Organization': {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Conference_Section_: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Data_used_for_research: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Date: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Email: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Name: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Obtained_values_parameters_criteria: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Organization_: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Participation_with_a_presentation_Full_Name_: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Participation_with_a_presentation_Full_Name_br_: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Phone: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Position: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Position_: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Position_if_not_listed_above: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Problem_statement: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Publication_of_the_article_: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Research_objectives: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Research_results_identified_patterns_addition_to_theory_solution_of_applied_problem:
      {
        allowNull: true,
        type: DataTypes.STRING,
      },
    Research_tasks: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Software_used: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Stage: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Status: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Title_of_the_presentation_: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Your_ORCID: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Your_Researcher_ID_Web_of_Science: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Your_Scopus_ID_: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    formid: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    formname: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    tranid: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Ваш_Author_ID_РИНЦ: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Ваш_ORCID: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Ваш_Researcher_ID_Web_of_Science: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Ваш_Scopus_ID_: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Должность: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Должность_: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Должность_если_не_указана_в_списке_выше: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Задачи_исследование: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Задачи_исследование_: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Используемое_программное_обеспечение: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Используемое_программное_обеспечение_: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Используемые_данные_для_исследования: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Используемые_данные_для_исследования_: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Комментарий: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Название_доклада: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Название_доклада_: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Организация_: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    'Планируете_ли_вы_участие_в_выставке-форуме_МИИГАиК_-_территория_инновацийbr_с_24_по_27_мая_2024г_':
      {
        allowNull: true,
        type: DataTypes.STRING,
      },
    'Планируете_ли_вы_участие_в_выставке-форуме_МИИГАиК_-_территория_инновацийс_24_по_27_мая_2024г_':
      {
        allowNull: true,
        type: DataTypes.STRING,
      },
    Полученные_значения_параметры_критерии: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Полученные_значения_параметры_критерии_: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Постановка_проблемы: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Постановка_проблемы_: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Публикация_статьи_: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    'Результаты_исследования:_установленные_закономерности_дополнение_теории_решение_прикладной_задачи':
      {
        allowNull: true,
        type: DataTypes.STRING,
      },
    Результаты_исследования_установленные_закономерности_дополнение_теории_решение_прикладной_задачи:
      {
        allowNull: true,
        type: DataTypes.STRING,
      },
    Результаты_исследования_установленные_закономерности_дополнение_теории_решение_прикладной_задачи_:
      {
        allowNull: true,
        type: DataTypes.STRING,
      },
    Секция_конференции_: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    'Соавтор_1_ФИО_Е-mail_должность_организация': {
      allowNull: true,
      type: DataTypes.STRING,
    },
    'Соавтор_2_ФИО_Е-mail_должность_организация': {
      allowNull: true,
      type: DataTypes.STRING,
    },
    'Соавтор_3_ФИО_Е-mail_должность_организация': {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Участие_: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Фамилия_Имя_Отчество_полностью_: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Цели_исследования: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Цели_исследования_: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Язык_: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);
