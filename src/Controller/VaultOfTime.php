<?php
/**
 * Created by PhpStorm.
 * User: al
 * Date: 2017-12-08
 * Time: 22:57
 */

namespace App\Controller;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class VaultOfTime extends Controller
{
    /**
     * @Route("/vot/")
     */
    public function Index()
    {
        return $this->render(
            'VaultOfTimeApp/VaultOfTime.html.twig'
        );
    }
}