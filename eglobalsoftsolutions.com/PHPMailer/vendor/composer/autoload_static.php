<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit3bef9b9999a9efba535d96c186b4eb8b
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit3bef9b9999a9efba535d96c186b4eb8b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit3bef9b9999a9efba535d96c186b4eb8b::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
