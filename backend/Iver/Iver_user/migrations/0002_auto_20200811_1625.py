# Generated by Django 3.1 on 2020-08-11 07:25

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('Iver_user', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='user',
            options={'verbose_name': '사용자', 'verbose_name_plural': '사용자'},
        ),
        migrations.AddField(
            model_name='user',
            name='password',
            field=models.CharField(default='test@naver.com', max_length=64, verbose_name='비밀번호'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='register_dttm',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now, verbose_name='등록시간'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='useremail',
            field=models.EmailField(default='test@naver.com', max_length=64, verbose_name='사용자 이메일'),
            preserve_default=False,
        ),
        migrations.AlterModelTable(
            name='user',
            table='Iver_user',
        ),
    ]
