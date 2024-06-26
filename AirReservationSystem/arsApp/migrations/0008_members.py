# Generated by Django 5.0.1 on 2024-02-02 11:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('arsApp', '0007_rename_members_users'),
    ]

    operations = [
        migrations.CreateModel(
            name='Members',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=100)),
                ('Username', models.CharField(max_length=50)),
                ('Email', models.EmailField(max_length=100)),
                ('DOB', models.CharField(max_length=100)),
                ('Address', models.CharField(max_length=100)),
                ('Shift', models.CharField(max_length=100)),
                ('Role', models.CharField(max_length=10)),
            ],
        ),
    ]
