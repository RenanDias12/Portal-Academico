import 'package:flutter/material.dart';
import 'package:mobile/src/core/appTextStyles.dart';

class MenuView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        children: [
          SizedBox(height: 20),
          ListTile(
            leading: Icon(Icons.home),
            title: Text('Início', style: AppTextStyles.bodyBold),
            onTap: (){
              Navigator.of(context).pushReplacementNamed('/home');
            },
          ),
          ListTile(
            title: Text('SERVIÇO ACADÊMICO', style: AppTextStyles.bodyGray14,)
          ),
          ListTile(
            leading: Icon(Icons.folder_open),
            title: Text('Material de Aula', style: AppTextStyles.bodyBold),
            onTap: (){
              Navigator.of(context).pushReplacementNamed('/classMaterial');
            },
          ),
          ListTile(
            leading: Icon(Icons.assessment_outlined),
            title: Text('Notas', style: AppTextStyles.bodyBold),
            onTap: (){
              Navigator.of(context).pushReplacementNamed('/grades');
            },
          ),
          ListTile(
            leading: Icon(Icons.date_range),
            title: Text('Frequência', style: AppTextStyles.bodyBold),
            onTap: (){
              Navigator.of(context).pushReplacementNamed('/frequency');
            },
          ),
          ListTile(
            leading: Icon(Icons.school_outlined),
            title: Text('Histórico', style: AppTextStyles.bodyBold),
            onTap: (){
              Navigator.of(context).pushReplacementNamed('/historic');
            },
          ),
          ListTile(
            leading: Icon(Icons.bar_chart_sharp),
            title: Text('Coeficiente Acadêmico', style: AppTextStyles.bodyBold),
            onTap: (){
              Navigator.of(context).pushReplacementNamed('/academicCoef');
            },
          ),
          ListTile(
            title: Text('CALENDÁRIO E HORÁRIOS', style: AppTextStyles.bodyGray14,)
          ),
          ListTile(
            leading: Icon(Icons.access_time),
            title: Text('Horário de Atendimento', style: AppTextStyles.bodyBold),
            onTap: (){
              Navigator.of(context).pushReplacementNamed('/openingHours');
            },
          ),
          ListTile(
            leading: Icon(Icons.text_snippet_outlined),
            title: Text('Provas', style: AppTextStyles.bodyBold),
            onTap: (){
              Navigator.of(context).pushReplacementNamed('/tests');
            },
          ),
          ListTile(
            leading: Icon(Icons.event),
            title: Text('Reposição de Aula', style: AppTextStyles.bodyBold),
            onTap: (){
              Navigator.of(context).pushReplacementNamed('/replacement');
            },
          ),
        ],
      ),
    );
  }
}